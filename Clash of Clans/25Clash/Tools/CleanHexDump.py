hexdump_lines = r'''

'''.strip().splitlines()

hex_bytes = []

for line in hexdump_lines:
    # Split line by spaces
    parts = line.split()
    if len(parts) < 2:
        continue
    middle_hex = parts[1:17]  # 16 bytes per line
    hex_bytes.extend(middle_hex)

hex_string = ''.join(hex_bytes)

with open("dump.txt", "w", encoding="utf-8") as f:
    f.write(hex_string)