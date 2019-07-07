import { observable } from 'mobx';

export default class AppStore {

    section = document.getElementsByTagName('section');
    footer = document.getElementsByTagName('footer');

    @observable 
    counter = 0;

    handleUp = (): void => {
        switch (this.counter) {
            case 1 : {
                this.scrollTo(0);
                this.counter--;
            } break;

            case 2 : {
                this.scrollTo(this.section[0].offsetTop);
                this.counter--;
            } break;

            case 3 : {
                this.scrollTo(this.section[1].offsetTop);
                this.counter--;
            } break;

            case 4 : {
                this.scrollTo(this.section[2].offsetTop);
                this.counter--;
            } break;
            default : return;
        }
    }
    
    handleDown = (): void => {
        switch(this.counter) {
            // profile
            case 0 : {
                this.scrollTo(this.section[0].offsetTop);
                this.counter++;
            } break;

            // skill
            case 1 : {
                this.scrollTo(this.section[1].offsetTop);
                this.counter++;
            } break;

            // exp
            case 2 : {
                this.scrollTo(this.section[2].offsetTop);
                this.counter++;
            }

            // footer
            case 3 : {
                this.scrollTo(this.footer[0].offsetTop);
                this.counter++;
            }
            default: return;
        }
    }
    
    scrollTo = (position: number): void => {
        window.scrollTo({
            top: position,
            behavior: 'smooth',
        })
    }
}