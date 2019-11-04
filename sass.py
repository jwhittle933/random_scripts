#! /usr/bin/env python3
"""Find all SASS files and update rem values"""
import os
import re
from glob import glob

TOTAL = 0
M = 0.8125

def print_matches(fname, line_number, line, matches):
    """Print matched items"""
    for find in matches:
        line = re.sub(find, f'\033[35m{find}\033[m', line)
    print(f'\033[4m{fname}, line {line_number}\033[m')
    print(f'Matches: {matches}')
    print(f'\t{line.strip()}\n')


def convert_int_or_float(numeric_string):
    """Conversion method"""
    try:
        return int(numeric_string)
    except ValueError:
        return float(numeric_string)

def replace_match(re_line, matches):
    """Replace method """
    for find in matches:
        num = convert_int_or_float(find.replace('rem', ''))
        re_line = re.sub(str(num), f'{str(num * M)}', re_line)
    return re_line

for f in [y for x in os.walk('./src') for y in glob(os.path.join(x[0], '*.scss'))]:
    file_lines = []
    with open(f, 'r') as file:
        # lines in file
        lines = file.readlines()
        for i, l in enumerate(lines):
            if "rem " in l or 'rem;' in l:
                TOTAL += 1
                found = re.findall(r'\d*\.?\d{1,}rem', l)
                # print_matches(file.name, i, l, found)
                replaced_line = replace_match(l, found)
                file_lines = [*file_lines, *[replace_match(l, found)]]
            else:
                file_lines = [*file_lines, *[l]]

    with open(f, 'w') as file:
        # iterate and write line one by onee
        for write_line in file_lines:
            file.writelines(write_line)

print(f'Found \033[1;32m{TOTAL} \033[mlines containing "rem"')
