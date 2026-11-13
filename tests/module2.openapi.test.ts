import {
  describe,
  it,
  expect,
} from "vitest";

import {
  readFileSync,
} from "node:fs";

import {
  resolve,
} from "node:path";

const documentPath = resolve(
  process.cwd(),
  "docs",
  "openapi.json"
);

const openapi = JSON.parse(
  readFileSync(documentPath, "utf8")
);

describe("Módulo II - OpenAPI", () => {

  it("conserva el endpoint del Playground", () => {
    expect(
      openapi.paths[
        "/api/v1/playground/generate"
      ]
    ).toBeDefined();
  });

  it("documenta la nueva extracción", () => {
    expect(
      openapi.paths["/api/v1/extract"].post
    ).toBeDefined();
  });

  it("incluye el contrato de entrada", () => {
    expect(
      openapi.components.schemas.ExtractRequest
    ).toBeDefined();
  });

  it("incluye el contrato de salida", () => {
    expect(
      openapi.components.schemas.ExtractResponse
    ).toBeDefined();
  });

  it("conserva OpenAPI 3", () => {
    expect(openapi.openapi).toMatch(/^3\./);
  });
});