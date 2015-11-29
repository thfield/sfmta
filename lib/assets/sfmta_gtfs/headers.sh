for file in *.txt; do
    touch headers.txt
    line=$(head -n 1 $file)
    echo $file: $line >> headers.txt
done
