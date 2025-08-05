$(document).ready(() => {
    const titulos = [
        'JavaScript', 
        'jQuery',
        'NodeJs', 
        'TypeScript',
        'React',
        'React Native',
        'Java',
        'C/C++', 
        'C Sharp',
        'PHP',        
        'MySQL',
        'CSS3', 
        'HTML5',
        'Flutter'   
    ]

    const linksimgs =[
        "devicon-javascript-plain colored",
        "devicon-jquery-plain colored",
        "devicon-nodejs-plain-wordmark colored",
        "devicon-typescript-plain colored",
        "devicon-react-original colored",
        "devicon-react-original colored",
        "devicon-java-plain",
        "devicon-cplusplus-plain colored",
        "devicon-csharp-plain colored",
        "devicon-php-plain colored",
        "devicon-mysql-plain-wordmark colored",
        "devicon-css3-plain colored",
        "devicon-html5-plain colored",
        "devicon-flutter-plain"
    ]


    for (let j = 1; j < titulos.length + 1; j++) {
        let projeto = `
        <div class="teste2323" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div class="card1">
                <div class="junta">
                    <div class="elements">
                        <i class="${linksimgs[j - 1]}"></i>
                        <h1 class="txt2">${titulos[j - 1]}</h1>
                    </div>
                </div>
            </div>
        </div>
        `
        $('.cards').append(projeto);
    }
})

