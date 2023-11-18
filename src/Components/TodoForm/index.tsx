import { useRef, useContext, useState, FormEvent } from "react";
import { TodosContext } from "../../Context/todosContext";

import {
  Container,
  Input,
  NewButton,
  Overlay,
  Content,
  Title,
  CloseButton,
  PageTitle,
  Form,
  TextArea,
  SubmitButton,
  CategoryButton,
  CategoryContainer,
} from "./styled";

import * as Dialog from "@radix-ui/react-dialog";
import { CategoryUtils } from "../../utils/CategoryUtils";

import { Plus, X } from "@phosphor-icons/react";

export function TodoForm() {
  const initialCategory = "work";
  const [category, setCategory] = useState(initialCategory);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { create } = useContext(TodosContext);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!inputRef.current) {
      return;
    }

    create({ todoName: inputRef.current.value, category });
    inputRef.current.value = "";
    setCategory(initialCategory);
    closeModal();
  }

  const { colors, buttons } = CategoryUtils();

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  //TODO: Adjust to a modal with a trigger
  return (
    <Container>
      <PageTitle>TodoList</PageTitle>
      <Dialog.Root open={isModalOpen}>
        <Dialog.Trigger asChild>
          <NewButton onClick={openModal}>
            <Plus size={14} />
          </NewButton>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Overlay>
            <Content>
              <Title>Create New</Title>
              <Dialog.Description>Create a new Todo here.</Dialog.Description>
              <Dialog.Close asChild>
                <CloseButton onClick={closeModal}>
                  <X size={32} />
                </CloseButton>
              </Dialog.Close>

              <Form onSubmit={handleSubmit}>
                <Input ref={inputRef} placeholder="Insira o nome" />
                <TextArea placeholder="Insira uma descrição" />
                <CategoryContainer>
                  {buttons.map((button, index) => (
                    <CategoryButton
                      isSelected={category === button.value}
                      onClick={() => setCategory(button.value)}
                      type="button"
                      key={index}
                      color={colors[button.value]}
                    >
                      {button.label}
                    </CategoryButton>
                  ))}
                </CategoryContainer>

                <Dialog.Close asChild onClick={closeModal}>
                  <SubmitButton onClick={handleSubmit}>Finish</SubmitButton>
                </Dialog.Close>
              </Form>
            </Content>
          </Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </Container>
  );
}
