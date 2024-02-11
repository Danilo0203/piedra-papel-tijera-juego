import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";
import type { InstanceOptions } from "flowbite";

const $modalElement = <HTMLElement>document.querySelector("#modalEl");

const modalOptions: ModalOptions = {
  placement: "bottom-right",
  backdrop: "dynamic",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
  closable: true,
  onHide: () => {
    console.log("modal is hidden");
  },
  onShow: () => {
    console.log("modal is shown");
  },
  onToggle: () => {
    console.log("modal has been toggled");
  },
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: "modalEl",
  override: true,
};

const modal: ModalInterface = new Modal($modalElement, modalOptions, instanceOptions);

modal;
