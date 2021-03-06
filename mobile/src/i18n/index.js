/**
 *
 * Internationalization made like a douchbag. It will have to be done better in the future.
 * I didn't have the motivation to make it properly for now.
 *
 */

const LANGUAGE = 'fr';

export function translate(key) {
  return translations[key] || key;
}

const translations = {
  en: {
    login: 'Log In',
    logout: 'Log out',
    forgot_password: "You don't have access to your account anymore?",

    // Globals
    yes: 'Yes',
    loading: 'Loading...',
    cancel_sign_up: 'Cancel sign up',
    email: 'E-mail address',
    sign_in: 'Sign in !',
    sign_up: 'Create an account',
    confirm: 'Confirm',
    cancel: 'Cancel',

    //Sign up translations
    whats_your_name: "What's your name ?",
    first_name: 'First name',
    last_name: 'Last name',
    are_you_major: 'Are you major ?',
    e_cig_forbidden:
      'According to Article L3511-2-1, it is forbidden to sell electronic vaping devices or refill bottles to minors.',

    choose_your_store: 'Choose your store !',
    change_your_store_later:
      "In the future, if you wish to change your store, go your account's settings",
    finish_sign_up: 'Finalize your sign up',
    hard_password:
      'Make sure your password will be hard to find, even for a relative or a friend of yours',
    thanks_trust: 'Thanks for your trust !',
    gathering_articles: 'Gathering articles...',

    // Reset password translations
    password: 'Password',
    new_password: 'New password',
    password_confirm: 'Repeat your password',
    reset_password: 'Reset your password',
    reset_token: 'Token received by mail',

    //Home translations
    hello: 'Hello',
    best_sales: 'Best-selling products',
    new_products: 'New products',
    add_to_cart: 'Add to cart',
    your_last_order: 'Your last order',
    replace_with_cart: 'Replace with cart',
    merge_with_cart: 'Merge with cart',

    // Browse translations
    know_what_you_want: "Do you know what you're looking for ?",
    find_your_product: 'Find your product',

    //Search translations
    what_you_looking_for: 'What are you looking for ?',
    reinitialize: 'Reinitialize',
    your_results: 'Your results',

    // Cart translations
    your_cart: 'Your cart',
    continue: 'Continue',
    see_product: 'See the product',
    remove_product: 'Remove the product',
    sub_total: 'Sub total',
    total_price: 'Total price',
    product_deleted: 'Product deleted. Please remove it from your cart.',
    product_not_available: 'Product not available. Please remove it from your cart.',
    invalid_cart_title: 'Invalid cart',
    invalid_cart_deleted:
      'Your cart contains deleted products. Please remove them before continuing.',
    invalid_cart_not_available:
      'Your cart contains unavailable products. Please remove them before continuing.',

    // Filters translations
    our_brands: 'Our brands',
    our_categories: 'Our categories',
    our: 'Our',

    // Products list translations
    filter: 'Filter',

    //Product translations
    no_longer_available_options: 'This product is no longer available in:',
    not_available_product: 'This product is currently not longer available.',

    //Recap translations
    summary: 'Summary',
    your_order: 'Your order',
    when_take_order: 'When do you wish to come and get your order ?',
    finish_order: 'Finalize your order',
    accept_gtc:
      'By validating your order, you accept the integrality of our GTC, and our personal information politic management',
    total_excl_tax: 'Total (excl tax)',
    total_incl_tax: 'Total (incl tax)',
    total_vat: 'Total VAT',

    //Payment translations

    pay: 'Pay',
    pay_button: 'Pay',
    number: 'CARD NUMBER',
    expiry: 'EXPIRY',
    cvc: 'CVC/CCV',
    status_submitted: 'Redirecting towards your bank service...',
    status_waiting: 'Waiting for your bank confirmation...',
    status_paid: 'Payment done !',
    status_failed: 'Payment failed. Please retry.',

    //Settings translations
    account_information: 'Account information',
    privacy_and_security: 'Privacy and security',
    legal_mentions: 'Legal mentions',
    delete_account: 'Delete my account',
    general_terms: 'General terms of use',
    receive_emails: 'Receive emails',
    receive_notifications: 'Receive notifications',

    your_username: 'Your username',
    your_password: 'Your password',
    your_settings: 'Your settings',
    your_account: 'Your account',
    your_orders: 'Your orders',
    your_shop: 'Your shops',
    your_firstname: 'Your firstname',
    your_lastname: 'Your lastname',

    update_informations: 'Update my informations',
    update_password: 'Update my password',

    //Orders translations
    order_of: 'Order of',

    //Shops translations
    current_shop: 'Your current shop',
    change_shop: 'Navigate to another shop',

    // After payment translations
    congratz_payment: 'Congratulations, your order was taken into account ! ????',
    will_receive_notif:
      "You will receive a notification as soon as we'll have prepared it.",
    back_to_home: 'Back to home',

    // Empty translations
    empty_cart: 'You cart is empty !',
    empty_orders: "You haven't made any orders yet !",
  },
  fr: {
    login: 'Connexion',
    logout: 'D??connexion',
    forgot_password: "Vous n'avez plus acc??s ?? votre compte ?",

    // Globals
    yes: 'Oui',
    loading: 'Chargement en cours...',
    email: 'Addresse email',
    sign_in: 'Connectez-vous !',
    sign_up: 'Cr??er un compte',
    confirm: 'Confirmer',
    cancel: 'Annuler',

    //Sign up translations
    whats_your_name: 'Comment vous appelez-vous ?',
    first_name: 'Pr??nom',
    last_name: 'Nom',
    are_you_major: '??tes vous majeur ?',
    e_cig_forbidden:
      'Selon l???article L3511-2-1, il est interdit de vendre des dispositifs ??lectroniques de vapotage ou des flacons de recharge ?? des mineurs.',
    cancel_sign_up: "Annuler l'inscription",

    // Reset password translations
    password: 'Mot de passe',
    new_password: 'Nouveau mot de passe',
    password_confirm: 'R??p??tez votre mot de passe',
    reset_password: 'R??initialisez votre mot de passe',
    reset_token: 'Code re??ue par mail',

    choose_your_store: 'Choisissez votre boutique !',
    change_your_store_later:
      'A l???avenir si vous souhaitez changer de boutique, rendez-vous dans vos param??tres de compte.',
    finish_sign_up: 'Finalisez votre inscription',
    hard_password:
      'Faites en sorte que votre mot de passe soit impossible ?? deviner, m??me pour un membre de votre famille ou un ami(e)',
    thanks_trust: 'Merci de votre confiance !',
    gathering_articles: 'R??cup??ration des articles...',

    //Home translations
    hello: 'Bonjour',
    best_sales: 'Les meilleures ventes',
    new_products: 'Les nouveaut??s',
    add_to_cart: 'Ajouter au panier',
    your_last_order: 'Votre derni??re commande',
    replace_with_cart: 'Remplacer le panier',
    merge_with_cart: 'Fusionner avec le panier',

    // Browse translations
    know_what_you_want: 'Vous savez ce que vous voulez ?',
    find_your_product: 'Trouvez votre produit',

    //Search translations
    what_you_looking_for: 'Que cherchez vous ?',
    reinitialize: 'R??initialiser',
    your_results: 'Vos r??sultats',

    // Cart translations
    your_cart: 'Votre panier',
    continue: 'Continuer',
    see_product: 'Voir le produit',
    remove_product: 'Retirer le produit',
    sub_total: 'Sous-total',
    total_price: 'Montant total',
    product_deleted: 'Produit supprim??. Veuillez le retirer de votre panier.',
    product_not_available:
      'Produit plus disponible. Veuillez le retirer de votre panier.',
    invalid_cart_title: 'Panier invalide',
    invalid_cart_deleted:
      'Votre panier contient des produits qui ont ??t?? retir?? de la vente par votre boutique.\n Veuillez les enlever de votre panier avant de continuer.',
    invalid_cart_not_available:
      'Votre panier contient des produits qui ne sont plus disponible dans leurs configurations.\n Veuillez les enlever de votre panier avant de continuer.',

    // Filters translations
    our_brands: 'Nos marques',
    our_categories: 'Nos cat??gories',
    our: 'Nos',

    // Products list translations
    filter: 'Filtrer',

    //Product translations
    no_longer_available_options: "Ce produit n'est plus disponible en:",
    not_available_product: "Ce product n'est actuellement plus disponible",

    //Recap translations
    summary: 'R??capitulatif',
    your_order: 'Votre commande',
    when_take_order: 'Quand souhaitez-vous r??cup??rer votre commande ?',
    finish_order: 'Finalisez votre commande',
    accept_gtc:
      'En validant votre commande, vous acceptez l???int??gralit?? de nos CGV ainsi que notre politique de gestion de vos informations personnelles.',
    total_excl_tax: 'Total HT',
    total_incl_tax: 'Total TTC',
    total_vat: 'Total TVA',

    //Payment translations
    pay: 'Paiement',
    pay_button: 'Payer',
    number: 'NUM??RO DE CARTE',
    expiry: 'EXPIRATION',
    cvc: 'CVC/CCV',
    status_submitted: 'Redirection vers votre banque en cours...',
    status_waiting: 'En attente de confirmation de votre banque...',
    status_paid: 'Paiement effectu?? !',
    status_failed: 'Paiement ??chou??. R??ssayez.',

    //Settings translations
    account_information: 'Donn??es personnelles',
    privacy_and_security: 'Confidentialit?? et s??curit??',
    legal_mentions: 'Mentions l??gales',
    delete_account: 'Supprimer mon compte',
    general_terms: "Conditions g??n??ral d'utilisation",
    receive_emails: 'Recevoir des emails',
    receive_notifications: 'Recevoir des notifications',

    your_username: "Votre nom d'utilisateur",
    your_password: 'Votre mot de passe',
    your_settings: 'Vos param??tres',
    your_account: 'Votre compte',
    your_orders: 'Vos commandes',
    your_shop: 'Vos magasins',
    your_firstname: 'Votre pr??nom',
    your_lastname: 'Votre nom de famille',

    update_informations: 'Mettre ?? jour mes informations',
    update_password: 'Modifier mon mot de passe',

    //Orders translations
    order_of: 'Commande du',

    //Shops translations
    current_shop: 'Votre boutique actuelle',
    change_shop: 'Naviguer vers une autre boutique',

    // After payment translations
    congratz_payment: 'F??licitations, votre commande est bien prise en compte ! ????',
    will_receive_notif:
      'Vous recevrez une notification d??s que nous aurons pr??par?? votre commande.',
    back_to_home: "Retour ?? l'accueil",

    // Empty translations
    empty_cart: 'Votre panier est vide !',
    empty_orders: "Vous n'avez encore aucune commande !",
  },
}[LANGUAGE];

export default translations;
