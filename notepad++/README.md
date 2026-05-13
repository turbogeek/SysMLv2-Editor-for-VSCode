# SysMLv2 & KerML Notepad++ Integration

To use the SysMLv2 Language Server in Notepad++, you need to install the **NppLSP** plugin and configure it to launch the server we have built.

## 1. Syntax Highlighting (UDL)
1. Open Notepad++.
2. Go to `Language` -> `User Defined Language` -> `Define your language...`
3. Click `Import...` and select the `SysMLv2_UDL.xml` file located in this directory.
4. Restart Notepad++. Files with `.sysml` and `.kerml` extensions will now have basic syntax highlighting.

## 2. Install NppLSP
1. Open Notepad++.
2. Go to `Plugins` -> `Plugins Admin...`.
3. Search for `NppLSP` and install it.
4. Restart Notepad++.

## 3. Configure NppLSP
1. Go to `Plugins` -> `NppLSP` -> `Settings`.
2. Add a new server configuration for SysMLv2.
3. Use the following settings (adjust the path to point to your `sysmlv2-lsp/server` directory):

```ini
[SysMLv2]
Language=sysml
Extension=.sysml;.kerml
Command=node <PathToWorkspace>\sysmlv2-lsp\server\out\server.js --stdio
```

*Note: Ensure you have compiled the server first by running `npm run compile` in the `sysmlv2-lsp` folder.*

4. Restart Notepad++. The LSP should now start automatically when you open a `.sysml` file, providing live syntax validation (red squiggles for errors).
