class actions {
    constructor(){
        this._addModal = document.querySelector('.addItem');
        this._btnClose = document.querySelector('.modal span')
        this._modal = document.querySelector('#modal');
        this._inputs = document.querySelectorAll('form input');
        this.modal();
        this.checkIcon();
    }

    modal(){
        
        this._addModal.addEventListener('click', event=>{
            this._modal.classList.add('active');
            this._modal.addEventListener('click', e=>{
                if(e.target.id == "modal" || e.target.id == "fechar"){
                    this._modal.classList.remove('active');
                    this.clearData(this._inputs)

                }
            })
        })
    }

    clearData(inputs) {
        inputs.forEach(element=> {
            if(element.value == '') {
                element.classList.remove('valida')
            }
        });
    }

    checkIcon() {

        let icon = document.querySelectorAll('.conteudo-table  tr .check input')

        icon.forEach(e=>{

            e.addEventListener('click', event=> {

                if(e.checked){
                    event.toElement.parentElement.children[0].innerHTML = 'check_box';
                }else {
                    event.toElement.parentElement.children[0].innerHTML = 'check_box_outline_blank';
                }  
    
            })
        })

    }


}


new actions();