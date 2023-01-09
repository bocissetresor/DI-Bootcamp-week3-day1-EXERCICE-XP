// 1. Dans le corps de la page HTML, créez un div vide :<div class="listBooks"></div>
// 2. Dans le fichier js, créez un tableau appelé allBooks. Il s'agit d'un tableau d'objets. Chaque objet est un livre qui possède 4 clés
// 3. Initiez le tableau avec 2 livres de votre choix 
var allBooks = [{
            title: 'Les de l\'independances',
            auteur: 'd\'Ahmadou Kourouma',
            image: 'imag1.PNG',
            alreadyRead: false}, 
        {
            title: 'Soundjata Keita ou l\'épopée mandingue',
            auteur: 'Djibril Tamsir Niane',
            image: 'imag2.PNG',
            alreadyRead: true
        },]
// 4. Exigences : Toutes les instructions ci-dessous doivent être codées dans le fichier js :
var tableau = document.createElement('tableau')
tableau.classList.add('tableau')
var tr = document.createElement('tr')
var proprietes = ['Title', 'auteur', 'Image', 'Deja regardé']
proprietes.forEach(ligne => {
    var th = document.createElement('th')
    th.className = 'th'
    th.textContent = ligne
    tr.appendChild(th)
})
tableau.appendChild(tr)
allBooks.forEach(livre => {
    var tr = document.createElement('tr')
    for(ligne in livre) {
        var td = document.createElement('td')
        td.className = 'td'
        if(ligne == 'image') {
            var img = document.createElement('img')
            img.src = livre[ligne]
            img.width = '100'
            td.appendChild(img)
        } else {
            td.textContent = livre[ligne]
        }
        tr.appendChild(td)
    }
    if(livre.alreadyRead)
        tr.classList.add('Regarder')
    tableau.appendChild(tr)
})
document.querySelector('div').appendChild(tableau)