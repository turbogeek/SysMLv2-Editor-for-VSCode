import subprocess
import json
import time
import threading

def send_msg(proc, method, params=None, id=None, is_result=False):
    msg = {
        "jsonrpc": "2.0",
    }
    if is_result:
        msg["result"] = params
        msg["id"] = id
    else:
        msg["method"] = method
        if params is not None:
            msg["params"] = params
        if id is not None:
            msg["id"] = id
        
    msg_str = json.dumps(msg)
    payload = f"Content-Length: {len(msg_str)}\r\n\r\n{msg_str}"
    proc.stdin.write(payload.encode('utf-8'))
    proc.stdin.flush()

proc = subprocess.Popen(
    ['E:\\Program Files\\nodejs\\node.exe', 'E:\\_Documents\\git\\SysMLv2-Editor-for-VSCode\\sysmlv2-lsp\\server\\out\\server.js', '--stdio'],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE
)

send_msg(proc, 'initialize', {
    "capabilities": {
        "workspace": { "configuration": True }
    },
    "processId": None,
    "rootUri": None,
    "workspaceFolders": []
}, 1)

send_msg(proc, 'initialized', {})

send_msg(proc, 'textDocument/didOpen', {
    "textDocument": {
        "languageId": "sysml",
        "text": "package Actions_8Trigger { }",
        "uri": "file:///E:/test.sysml",
        "version": 0
    }
})

time.sleep(0.5)

send_msg(proc, '', [], id=0, is_result=True)
send_msg(proc, '', [], id=1, is_result=True)
send_msg(proc, '', [], id=2, is_result=True)
send_msg(proc, '', [], id=3, is_result=True)

time.sleep(1)
proc.stdin.close()

out, err = proc.communicate(timeout=2)
print("STDOUT:", out.decode('utf-8', errors='replace'))
print("STDERR:", err.decode('utf-8', errors='replace'))
print("EXIT CODE:", proc.returncode)
