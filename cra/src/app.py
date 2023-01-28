

a = ['russia', 'federation', None, 'a', 'federation',]

# проверка гражданства
print(all([i in ('russia', 'federation', 'russia federation') for i in set(a) - {None}]))

a = ['Aleksandr', 'Sipko',]

# проверка гражданства
print(all([i in ('russia', 'federation', 'russia federation') for i in set(a) - {None}]))
