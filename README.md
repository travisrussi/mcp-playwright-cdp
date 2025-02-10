# MCP Playwright CDP

A Model Context Protocol server that provides browser automation capabilities using Playwright with Chrome DevTools Protocol (CDP) support. This server enables LLMs to interact with web pages, take screenshots, and execute JavaScript in a real browser environment, with the ability to connect to existing Chrome instances via CDP.

> This is a fork of [executeautomation/mcp-playwright](https://github.com/executeautomation/mcp-playwright) with added CDP support for connecting to running Chrome instances.

## Key Features

- 🔗 Connect to existing Chrome instances via CDP
- 🌐 Full browser automation capabilities
- 📸 Screenshot capture of entire pages or specific elements
- 🖱️ Comprehensive web interactions (navigation, clicking, form filling)
- 📊 Console log monitoring
- 🔧 JavaScript execution in browser context
- 🌍 HTTP API testing support

## Installation

You can install the package using either npm or Smithery:

Using npm:
```bash
npm install -g
```

Using Smithery:
```bash
npx -y @smithery/cli install @lars-hagen/mcp-playwright-cdp --client claude
```

## Configuration

Add this to your Claude Desktop configuration file:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["mcp-playwright-cdp"]
    }
  }
}
```

## CDP Connection

This fork adds the ability to connect to an existing Chrome instance via CDP. To use this feature:

1. Launch Chrome with remote debugging enabled:
```bash
chrome --remote-debugging-port=9222
```

2. The server will automatically attempt to connect to the running Chrome instance first, before launching a new browser.

## Credits

This project is a fork of [executeautomation/mcp-playwright](https://github.com/executeautomation/mcp-playwright), enhanced with CDP support for connecting to running Chrome instances.

## License

MIT
