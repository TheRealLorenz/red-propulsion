import fs from "node:fs";
import path from "path";
import matter from "gray-matter";

export type MarkdownPage = {
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

function readContent(relativePath: string): string {
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), "content", relativePath),
    "utf-8",
  );

  if (fileContent === "") {
    throw `File not found`;
  }

  return fileContent;
}

const Markdown = {
  getPage: function (relativePath: string): MarkdownPage {
    try {
      const { content, data } = matter(
        readContent(path.join("pages", relativePath)),
      );

      checkMetadata(data);

      return { content, metadata: data };
    } catch (e: unknown) {
      throw `Error while parsing page '${relativePath}': ${e}`;
    }
  },

  getComponent: function (relativePath: string): string {
    try {
      return readContent(path.join("components", relativePath));
    } catch (e: unknown) {
      throw `Error while parsing component '${relativePath}': ${e}`;
    }
  },
};

export default Markdown;
