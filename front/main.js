// -------------------------------------------------------------------------- gestion click boutton smiley

const bouton = document.getElementById('lebouton')

bouton.onclick = () => {
    console.log("Attention j'envoie l'alert !!")
    alert("Hannnn t'as appuyéééééé !!!")
}

// -------------------------------------------------------------------------- gestion click boutton API

const bouton_api = document.getElementById('boutonAPI')
const resultat_api = document.getElementById('resultAPI')

bouton_api.onclick = async () => {

    resultat_api.innerHTML = 'loading message ...'

    const response = await fetch('/mon_api/get_message')
    const response_data = await response.json()

    console.log(response_data)

    const message = response_data.message

    resultat_api.innerHTML = message

}

// -------------------------------------------------------------------------- get OS INFOS

const os_button = document.getElementById('OSbutton')
const os_result_element = document.getElementById('OSinfos')

os_button.onclick = async () => {

    os_result_element.innerHTML = 'loading OS DATA ...'

    const response = await fetch('/mon_api/OS_infos')
    const response_data = await response.json()

    console.log(response_data)

    const infos_txt = response_data.infos_txt.replace(/\n/g, '</br>')

    os_result_element.innerHTML = infos_txt

}