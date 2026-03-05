"""
Sint DS — QA End-to-End
Ejecutar con: python qa_test.py
Requiere backend corriendo en localhost:8000 con API keys configuradas.
"""
import httpx
import json

BASE_URL = "http://localhost:8000"

PERFILES = {
    "A_Verde": {
        "email": "qa-verde@sint.cl",
        "P1": "CEO / Gerente General",
        "P2": "25 – 50",
        "P3": "Servicios Profesionales o Consultoría",
        "D1": "A", "D2": "B", "D3": "A", "D4": "A",
        "D5": "B", "D6": "A", "D7": "B", "D8": "A",
        "_esperado": {"sfs": 3.6, "nivel": "verde", "arquetipo": "ARQ-0"},
    },
    "B_Ambar": {
        "email": "qa-ambar@sint.cl",
        "P1": "COO / Gerente de Operaciones",
        "P2": "51 – 100",
        "P3": "Manufactura, Construcción o Logística",
        "D1": "B", "D2": "B", "D3": "B", "D4": "B",
        "D5": "B", "D6": "C", "D7": "C", "D8": "B",
        "_esperado": {"nivel": "ambar", "arquetipo": "ARQ-1"},
    },
    "C_Rojo": {
        "email": "qa-rojo@sint.cl",
        "P1": "CTO / Gerente de Tecnología",
        "P2": "101 – 200",
        "P3": "Finanzas o Seguros",
        "D1": "C", "D2": "C", "D3": "C", "D4": "C",
        "D5": "C", "D6": "C", "D7": "C", "D8": "C",
        "_esperado": {"nivel": "rojo", "arquetipo": "ARQ-2"},
    },
}


def limpiar_payload(perfil: dict) -> dict:
    return {k: v for k, v in perfil.items() if not k.startswith("_")}


def run_qa():
    print("=" * 60)
    print("Sint DS — QA End-to-End")
    print("=" * 60)

    # Health check
    try:
        r = httpx.get(f"{BASE_URL}/health", timeout=5)
        assert r.status_code == 200
        print("[OK] /health OK\n")
    except Exception as e:
        print(f"[ERROR] Backend no disponible: {e}")
        print("   Asegurate de que uvicorn esta corriendo en puerto 8000.")
        return

    resultados = []

    for nombre, perfil in PERFILES.items():
        esperado = perfil["_esperado"]
        payload = limpiar_payload(perfil)

        print(f"-- Perfil {nombre} {'-' * 40}")
        try:
            r = httpx.post(
                f"{BASE_URL}/diagnostico",
                json=payload,
                timeout=60,  # Claude puede tardar
            )

            if r.status_code != 200:
                print(f"[ERROR] Status {r.status_code}: {r.text[:200]}")
                resultados.append(False)
                continue

            data = r.json()
            nivel_ok = data.get("nivel") == esperado["nivel"]
            email_ok = data.get("email_enviado") is True
            sheets_ok = data.get("sheets_ok") is True

            print(f"   nivel:         {'[OK]' if nivel_ok else '[ERROR]'} {data.get('nivel')} (esperado: {esperado['nivel']})")
            print(f"   email_enviado: {'[OK]' if email_ok else '[ERROR]'} {data.get('email_enviado')}")
            print(f"   sheets_ok:     {'[OK]' if sheets_ok else '[ERROR]'} {data.get('sheets_ok')}")
            resultados.append(nivel_ok and email_ok and sheets_ok)

        except Exception as e:
            print(f"[ERROR] {e}")
            resultados.append(False)

        print()

    print("=" * 60)
    total = sum(resultados)
    print(f"Resultado: {total}/{len(resultados)} perfiles OK")
    if total == len(resultados):
        print("[OK] QA completo — sistema listo para produccion")
    else:
        print("[!] Revisar los perfiles con error antes de deploy")
    print("=" * 60)


if __name__ == "__main__":
    run_qa()
