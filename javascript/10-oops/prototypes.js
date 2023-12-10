const myHeros = ["batman", "flash", "ironman"]
const heroPower = {
    batman: "technology",
    flash: "running",
    "ironman": "kryptonite"
}

Object.prototype.extraPower = ()=> {
    console.log("I've Extra Power To Whack You Off Bloody CockSuckers!")
}

heroPower.extraPower()

Array.prototype.dangerVillian = () =>{
    console.log("Joker is the Dangerous villian!")
}

myHeros.dangerVillian()