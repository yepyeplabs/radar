import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonItem, IonLabel, IonToggle, IonModal, IonList, IonAccordion, IonAccordionGroup } from '@ionic/react';
import { useRef, useEffect } from "react"
import './Home.css';

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }

    accordionGroup.current.value = ['first'];
  }, []);
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonModal canDismiss={false} ref={modal} isOpen={true} initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
          <IonContent className="ion-padding">
            <IonHeader>
              <h1>Find places</h1>
            </IonHeader>
            <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} placeholder="Search"></IonSearchbar>
            <IonAccordionGroup ref={accordionGroup} multiple={true}>
              <IonAccordion value="first">
                <IonItem slot="header" color="light">
                  <IonLabel>that are</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  <IonList>
                   <IonItem>
                     <IonLabel>restaurants</IonLabel>
                     <IonToggle />
                   </IonItem>
                  </IonList>
                </div>
              </IonAccordion>
              <IonAccordion value="second">
                <IonItem slot="header" color="light">
                  <IonLabel>that have</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  <IonList>
                   <IonItem>
                     <IonLabel>bathrooms</IonLabel>
                     <IonToggle />
                   </IonItem>
                   <IonItem>
                     <IonLabel>gluten-free options</IonLabel>
                     <IonToggle />
                   </IonItem>
                  </IonList>
                </div>
              </IonAccordion>
              <IonAccordion value="third">
                <IonItem slot="header" color="light">
                  <IonLabel>that sell</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  <IonList>
                   <IonItem>
                     <IonLabel>dog food</IonLabel>
                     <IonToggle />
                   </IonItem>
                  </IonList>
                </div>
              </IonAccordion>
            </IonAccordionGroup>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;


/*
import React, { useRef, useEffect } from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
function Example() {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }

    accordionGroup.current.value = ['first', 'third'];
  }, []);

  return (
    <IonAccordionGroup ref={accordionGroup} multiple={true}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>First Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          First Content
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Second Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Second Content
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Third Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Third Content
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default Example;*/
