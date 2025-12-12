import { NextResponse } from "next/server";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";

const datastorePath = path.join(process.cwd(), "data", "whitelist.json");

const whitelistSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  wallet: z.string().min(8).max(64),
  affiliation: z.string().max(120).optional().default(""),
  intention: z.string().max(280).optional().default(""),
});

type WhitelistEntry = z.infer<typeof whitelistSchema> & { createdAt: string };

async function ensureStore() {
  try {
    await fs.access(datastorePath);
  } catch {
    await fs.mkdir(path.dirname(datastorePath), { recursive: true });
    await fs.writeFile(datastorePath, "[]", "utf8");
  }
}

async function readEntries(): Promise<WhitelistEntry[]> {
  await ensureStore();
  const raw = await fs.readFile(datastorePath, "utf8");
  try {
    return JSON.parse(raw) as WhitelistEntry[];
  } catch {
    return [];
  }
}

export async function GET() {
  try {
    const entries = await readEntries();
    const lastSubmission = entries.at(-1)?.createdAt;

    return NextResponse.json({
      total: entries.length,
      lastSubmission,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to load whitelist metrics" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = whitelistSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues.at(0)?.message ?? "Invalid submission" },
        { status: 400 }
      );
    }

    const entries = await readEntries();
    const exists = entries.find(
      (entry) =>
        entry.email.toLowerCase() === parsed.data.email.toLowerCase() ||
        entry.wallet.toLowerCase() === parsed.data.wallet.toLowerCase()
    );

    if (exists) {
      return NextResponse.json(
        {
          error:
            "Looks like you're already on the list. Hang tight for next steps!",
        },
        { status: 409 }
      );
    }

    const newEntry: WhitelistEntry = {
      ...parsed.data,
      createdAt: new Date().toISOString(),
    };

    entries.push(newEntry);
    await fs.writeFile(datastorePath, JSON.stringify(entries, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "We couldn't save your submission right now." },
      { status: 500 }
    );
  }
}


