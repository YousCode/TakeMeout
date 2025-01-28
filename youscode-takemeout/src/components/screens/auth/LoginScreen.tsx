import React from 'react';
import { StackLayout, FlexboxLayout, Label, Button, Image } from 'react-nativescript';

const LoginScreen: React.FC = () => {
  const onAppleLogin = () => {
    console.log('Connexion réussie avec Apple');
  };

  const onFacebookLogin = () => {
    console.log('Connexion réussie avec Facebook');
  };

  const onGoogleLogin = () => {
    console.log('Connexion réussie avec Google');
  };

  return (
    <StackLayout style={{ backgroundColor: '#dbeafe', height: '100%', padding: 16 }}>
      {/* Logo et titre */}
      <StackLayout style={{ alignItems: 'center', marginTop: 40 }}>
        <Image src="~/images/logo.png" style={{ width: 96, height: 96, marginBottom: 16 }} />
        <Label text="TakeMeOut" style={{ fontSize: 32, fontWeight: 'bold', color: '#000' }} />
      </StackLayout>

      {/* Boutons des catégories */}
      <FlexboxLayout style={{ justifyContent: 'center', marginTop: 32 }}>
        <Button text="Restaurant" style={{ margin: 8 }} />
        <Button text="Club" style={{ margin: 8 }} />
        <Button text="Bar" style={{ margin: 8 }} />
      </FlexboxLayout>

      {/* Boutons de connexion */}
      <StackLayout style={{ marginTop: 32 }}>
        <Button
          text=" Se connecter avec Apple"
          style={{
            backgroundColor: '#fff',
            marginVertical: 10,
            borderRadius: 8,
            padding: 16,
          }}
          onTap={onAppleLogin}
        />
        <Button
          text=" Se connecter avec Facebook"
          style={{
            backgroundColor: '#3b5998',
            color: '#fff',
            marginVertical: 10,
            borderRadius: 8,
            padding: 16,
          }}
          onTap={onFacebookLogin}
        />
        <Button
          text=" Se connecter avec Google"
          style={{
            backgroundColor: '#db4437',
            color: '#fff',
            marginVertical: 10,
            borderRadius: 8,
            padding: 16,
          }}
          onTap={onGoogleLogin}
        />
      </StackLayout>

      {/* Problèmes de connexion */}
      <Label
        text="Problèmes de connexion ?"
        style={{ textAlign: 'center', marginTop: 16, textDecoration: 'underline' }}
      />

      {/* Mentions légales */}
      <Label
        text="En appuyant sur Connexion, vous acceptez nos Conditions générales. Consultez notre Politique de confidentialité et notre Politique en matière de Cookies."
        style={{ textAlign: 'center', fontSize: 12, marginTop: 32, paddingHorizontal: 16 }}
      />
    </StackLayout>
  );
};

export default LoginScreen;