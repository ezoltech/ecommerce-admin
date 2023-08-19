'use client';


import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const StoreModal = useStoreModal();
    return(
    <Modal title="Create Store" description="Add new Store to manage and Categories" isOpen={StoreModal.isOpen} onClose={StoreModal.onClose}>
        Future Create Store Form
    </Modal>
    );
}