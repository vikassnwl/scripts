from functools import cmp_to_key

lst_of_tup = [(3, 1), (1, 3), (2, 2)]

# sort based on first item of tuple in ascending order
def srt_asc(tup1, tup2):
    return tup1[0] - tup2[0]

# sort based on first item of tuple in descending order
def srt_desc(tup1, tup2):
    return -(tup1[0] - tup2[0])


lst_of_tup.sort(key=cmp_to_key(srt_desc))

print(lst_of_tup)