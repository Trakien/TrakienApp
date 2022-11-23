import requests

dicStores = {
    "Ktronix": {"Televisores": "https://www.ktronix.com/tv-video/televisores/c/BI_120_KTRON", "Celulares": "https://www.ktronix.com/celulares/telefonos-celulares/c/BI_101_KTRON"},
    "Alkosto": {"Televisores": "https://www.alkosto.com/tv-video/televisores/c/BI_120_ALKOS", "Celulares": "https://www.alkosto.com/celulares/telefonos-celulares/c/BI_101_ALKOS"},
    "Alkomprar": {"Televisores": "https://www.alkomprar.com/tv-video/televisores/c/BI_120", "Celulares": "https://www.alkomprar.com/celulares/telefonos-celulares/c/BI_101"},
}


def progressbar(num, size=100):
    print("[", end="")
    for i in range(size):
        if i < num:
            print("#", end="")
        else:
            print("-", end="")
    print("]", end="")
    print(f" {num}%")


def tokenAuth():
    url = "http://localhost:81/v2/auth"
    payload = {
        "email": "Sebastian@mail.com",
        "password": "Password"
    }
    headers = {"Content-Type": "application/json"}
    response = requests.request("POST", url, json=payload, headers=headers)
    return response.json()["token"]


if __name__ == '__main__':
    token = tokenAuth()
    print("Token:" + token)
    counter = 0
    total = len(dicStores) * len(dicStores["Ktronix"])
    progressbar(counter)
    for store in dicStores:
        for category in dicStores[store]:
            url = "http://localhost:4999/api/v2/updater"
            payload = f"store={store}&url={dicStores[store][category]}&category={category}"
            headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": f"Bearer {token}"
            }
            response = requests.request(
                "POST", url, data=payload, headers=headers)
            if (response.status_code != 200):
                print("Error: " + response.text)
            counter += 1
            progressbar(int((counter/total)*100))
