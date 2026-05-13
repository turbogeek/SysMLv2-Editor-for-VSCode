import os

path = r'C:\Users\DBR2\AppData\Roaming\Notepad++\plugins\config\NppLspClient\NppLspClient.toml'

with open(path, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

new_lines = []
for line in lines:
    if line.startswith('[lspservers'):
        break
    new_lines.append(line)

new_lines.append('[lspservers.sysmlv2]')
new_lines.append('mode = "io"')
new_lines.append("executable = 'E:\\Program Files\\nodejs\\node.exe'")
new_lines.append("args = 'E:\\_Documents\\git\\SysMLv2-Editor-for-VSCode\\sysmlv2-lsp\\server\\out\\server.js --stdio'")
new_lines.append('auto_start_server = false')
new_lines.append('')

with open(path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print('Updated config.')
