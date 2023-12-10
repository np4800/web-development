function outer(){
    let username = "Sneha"
    function innerOne(){
        let secret = "ILU"
        console.log(`INNER-ONE: ${username}`)
    }

    function innerTwo(){
        console.log(`INNER-TWO: ${username}`)
        // console.log(`INNER-TW: ${secret}`)
    }

    innerOne()
    innerTwo()
    console.log(`OUTER: ${secret}`)
}

outer()