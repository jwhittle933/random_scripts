#!/bin/bash
file=$1
newline=$'\n'
newfile=$(pwd)/$1.temp

touch $newfile

re_number='^[0-9]+$'

while IFS= read -r line; do
	newline=""

	for value in $line; do
		if [[ $value =~ $re_number ]]; then
			newline+="\n${value}"
		else
			newline+=" $value"
		fi
	done
	echo -e $newline >> $newfile

done < "$file"
