module.exports = input_interger


function input_interger(opts) {

    const {min = 0, max = 1000} = opts

    const el = document.createElement('div')
    const shadow = el.attachShadow({mode : 'closed'})

    const input = document.createElement('input')
    input.type = 'number'
    input.min = min
    input.max = max
    input.onkeyup = (e) => handle_onkeyup(e, input, min, max)
    input.onmouseleave = (e) => handle_onmouseleave(e, input, min, max)


    const style = document.createElement('style')
    style.textContent = get_theme()

    shadow.append(input, style)
    return el

}

function handle_onkeyup(e, input, min, max){

    const val = Number(e.target.value)
    // console.log(val) 
    const val_len = val.toString().length
    const min_len = min.toString().length
    

    if (val > max) input.value = max
    else if (val_len === min_len && val < min) input.value = min
}
function handle_onmouseleave(e, input, min){
    
    const val = Number(e.target.value)
    if (val < min) input.value = ''
}

function get_theme() {
    return`
    :host{
        --b: 0, 0%;
        --color-white: var(--b), 100%;
        --color-black: var(--b), 0%;
        --color-grey: var(--b), 85%;
        --bg-color: var(--color-grey);
        --shadow-xy: 0 0;
        --shadow-blur: 8px;
        --shadow-color: var(--color-white);
        --shadow-opacity: 0;
        --shadow-opacity-focus: 0.65;
        --background-shadow: hsla(219, 92%, 99%, 1);
    }
    input{
        text-align: left;
        align-items:center;
        font-size:1.4rem;
        font-weight: 200;
        color: hsla(var(--color-black), 1);
        background-color: hsla(var(--bg-color), 1);
        padding: 8px 12px;
        box-shadow: var(--shadow-xy) (var--shadow-blur) hsla(var(--shadow-color), var(--shadow-opacity));
        transition: font-size .3s, color .3s, background-color .3s, box-shadow .3s ease-in-out;
        outline: none;
        border: 1px solid hsla(var(--bg-color), 1);
        border-radius: 8px;
    }
    input:focus {
        --shadow-color: var(--color-black);
        --shadow-opacity: var(--shadow-opacity-focus);
        --shadow-xy: 4px 4px;
        box-shadow: var(--shadow-xy) var(--shadow-blur) hsla(var(--shadow-color), var(--shadow-opacity));
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    
    `


}