import type { Root } from "hast";
import { visit } from "unist-util-visit";

export default function rehypeFigure() {
  return function (tree: Root) {
    visit(tree, { tagName: "p" }, function (node, index, parent) {
      if (
        node.children.every((child) => {
          return child.type === "element" && child.tagName === "img";
        })
      ) {
        if (parent !== undefined && index !== undefined) {
          parent.children.splice(index, 1, ...node.children);
        }
      }
    });

    visit(tree, { tagName: "img" }, function (node, _, parent) {
      if (parent?.type === "element" && parent.tagName === "figure") {
        return;
      }

      if (node.properties.alt && node.properties.alt !== "") {
        node.tagName = "figure";
        node.children = [
          {
            type: node.type,
            tagName: "img",
            properties: { ...node.properties },
            children: [],
          },
          {
            type: node.type,
            tagName: "figcaption",
            properties: {},
            children: [
              {
                type: "text",
                value: String(node.properties.alt),
              },
            ],
          },
        ];
        node.properties = {};
      }
    });
  };
}
