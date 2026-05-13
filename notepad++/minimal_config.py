import os

path = r'C:\Users\DBR2\AppData\Roaming\Notepad++\plugins\config\NppLspClient\NppLspClient.toml'

minimal_toml = """
[general]
enable_logging = true

[lspservers.sysml]
mode = "io"
executable = 'E:\\Program Files\\nodejs\\node.exe'
args = 'E:\\_Documents\\git\\SysMLv2-Editor-for-VSCode\\sysmlv2-lsp\\server\\out\\server.js --stdio'
auto_start_server = false
"""

with open(path, 'w', encoding='utf-8') as f:
    f.write(minimal_toml.strip())

print('Created minimal config.')
