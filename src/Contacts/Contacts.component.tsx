import { FC, useState } from 'react';
import { Contacts, Helmet } from './Contacts.styled';
import { faker } from '@faker-js/faker';

interface ContactsProps {}
interface ContactProps {
  name: string;
}

const ContactComponent: FC<ContactProps> = ({ name }) => {
  return (
    <Contacts.Item>
      <Contacts.ItemName>{name}</Contacts.ItemName>
    </Contacts.Item>
  );
};

const ContactsComponent: FC<ContactsProps> = (props) => {
  // generate 100 random contacts using faker
  const [contacts] = useState(() => {
    const contacts = [];
    for (let i = 0; i < 100; i++) {
      contacts.push({
        name: faker.name.findName(),
      });
    }
    return contacts.sort((a, b) => a.name.localeCompare(b.name));
  });

  return (
    <Contacts.Container>
      <Helmet.Container>
        <Helmet.Left>Groups</Helmet.Left>
        <Helmet.Title>Contacts</Helmet.Title>
        <Helmet.Right>+</Helmet.Right>
      </Helmet.Container>
      <Contacts.List>
        {contacts.map((contact, i, arr) => {
          // if the first character of the contact's name is the different from the previous contact's name,
          // then render a new ContactListItemIndex
          if (i === 0 || contact.name[0] !== arr[i - 1].name[0]) {
            return (
              <>
                <Contacts.Item key={contact.name}>
                  <Contacts.ItemIndex>{contact.name[0]}</Contacts.ItemIndex>
                </Contacts.Item>
                <ContactComponent name={contact.name} />
              </>
            );
          }

          return <ContactComponent key={contact.name} name={contact.name} />;
        })}
        {/* <ContactComponent name="John Doe" /> */}
      </Contacts.List>
    </Contacts.Container>
  );
};

export { ContactsComponent };
