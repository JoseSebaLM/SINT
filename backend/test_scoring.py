from scoring import calcular_scoring

# Perfil A - Verde esperado: SFS 3.6, ARQ-0
respuestas_a = {'D1':'A','D2':'B','D3':'A','D4':'A','D5':'B','D6':'A','D7':'B','D8':'A'}
resultado_a = calcular_scoring(respuestas_a)
print(f'Perfil A: SFS={resultado_a.sfs}, nivel={resultado_a.nivel}, arq={resultado_a.arquetipo_id}')

# Perfil B - Ámbar: ARQ-1 requiere D6>=1.6 y D7=C (valor=3)
respuestas_b = {'D1':'B','D2':'B','D3':'B','D4':'B','D5':'B','D6':'C','D7':'C','D8':'B'}
resultado_b = calcular_scoring(respuestas_b)
print(f'Perfil B: SFS={resultado_b.sfs}, nivel={resultado_b.nivel}, arq={resultado_b.arquetipo_id}')

# Perfil C - Rojo: ARQ-2 requiere D8>=3.2 (valor=C, peso=1.6 => 4.8) y D4>=1.4
respuestas_c = {'D1':'C','D2':'C','D3':'C','D4':'C','D5':'C','D6':'C','D7':'C','D8':'C'}
resultado_c = calcular_scoring(respuestas_c)
print(f'Perfil C: SFS={resultado_c.sfs}, nivel={resultado_c.nivel}, arq={resultado_c.arquetipo_id}')

print()
print('--- Verificaciones ---')
check_a = resultado_a.sfs == 3.6 and resultado_a.nivel == 'verde' and resultado_a.arquetipo_id == 'ARQ-0'
check_b = resultado_b.arquetipo_id == 'ARQ-1'
check_c = resultado_c.arquetipo_id == 'ARQ-2'
print(f'A: sfs=3.6, nivel=verde, arq=ARQ-0 -> {check_a}')
print(f'B: arq=ARQ-1 (con D7=C) -> {check_b}')
print(f'C: arq=ARQ-2 (con D8=C) -> {check_c}')

if check_a and check_b and check_c:
    print('\n✅ Todos los tests pasaron!')
else:
    print('\n❌ Algunos tests fallaron')
    exit(1)
