for file in *.csv; do
    mv "$file" "`basename $file .csv`.txt"
done
