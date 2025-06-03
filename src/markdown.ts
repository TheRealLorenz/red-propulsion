import fs from "node:fs";
import path from "path";
import matter from "gray-matter";

export type MarkdownFile = {
  content: string;
  metadata: Metadata;
};

export type Metadata = {
  title: string;
  description: string;
};

function checkMetadata(input: {
  [key: string]: string;
}): asserts input is Metadata {
  const fields = ["title", "description"] as const;

  for (const field of fields) {
    if (input[field] === undefined) {
      throw `Invalid metadata: missing '${field}'`;
    }
    if (typeof input[field] !== "string") {
      throw `Invalid type for '${field}': expected string got ${typeof input[field]}`;
    }
  }
}

export default function getMarkdown(fileRelativePath: string): MarkdownFile {
  try {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), "content", fileRelativePath),
      "utf-8",
    );

    if (fileContent === "") {
      throw `File not found`;
    }

    const { content, data } = matter(fileContent);
    checkMetadata(data);
    return { content, metadata: data };
  } catch (e: unknown) {
    throw `Error while parsing '${fileRelativePath}': ${e}`;
  }
}
