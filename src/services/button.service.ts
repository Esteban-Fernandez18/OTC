import { ref } from "vue";

class toggleChevron {
  public isChevronToggled = ref(false);
  public toggleChevron = () => {
    this.isChevronToggled.value = !this.isChevronToggled.value;
  };
}

export default toggleChevron;
