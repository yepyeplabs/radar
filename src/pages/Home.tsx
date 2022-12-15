import {
  IonContent, IonHeader, IonPage, IonSearchbar, IonItem, IonLabel, IonToggle, IonModal, IonList, IonAccordion, IonAccordionGroup,
  IonButtons, IonButton
} from '@ionic/react';
import { useRef, useEffect, useState } from "react"
import TheMap from '../components/TheMap'
import './Home.css';

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  const [visibility, setVisibility] = useState({
    menu: false,
    filters: true
  })

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }

    accordionGroup.current.value = ['first'];
  }, []);

  return (
    <>
      <IonPage id="main-content">
        <TheMap />
        <IonModal
          ref={modal}
          isOpen={true}
          initialBreakpoint={0.5}
          breakpoints={[0.25, 0.5, 0.75, 1]}
          handleBehavior="cycle"
          canDismiss={false}
          backdropBreakpoint={1}
        >
          <IonContent className="ion-padding">
            <IonButtons>
              <IonButton onClick={() => {
                setVisibility({ ...visibility, menu: !visibility.menu })
              }}>
                ⚙️
              </IonButton>
            </IonButtons>
            {visibility.menu && <IonHeader>
              <h1>Settings</h1>
            </IonHeader>}
            {visibility.filters && (<>
              <IonHeader>
                <h1>Find places</h1>
              </IonHeader>
              <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} placeholder="Search" />
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
            </>)}
          </IonContent>
        </IonModal>


      </IonPage>
    </>
  );
};

export default Home;


/*
import React from 'react';
import { 
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
function Example() {
  return (
    <>
      
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          Tap the button in the toolbar to open the menu.
        </IonContent>
      </IonPage>
    </>
  );
}

*/
