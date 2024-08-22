// import React, {useEffect, useState} from 'react';
// import {
//   TextInput,
//   Text,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {ApolloProvider, useLazyQuery} from '@apollo/client';

// import storeConfigQueries from './graphql/queries/storeconfig.gql';
// import axios from 'axios';
// import DNetWorkLog from './DNetWorkLog';

// const AppRouter = () => {
//   const {getStoreConfig} = storeConfigQueries || {};
//   const [dataAxios, setDataAxios] = useState(null);
//   const [errorAxios, setErrorAxios] = useState(null);

//   const [getStoreConfigQuery, {data, error}] = useLazyQuery(getStoreConfig, {
//     fetchPolicy: 'no-cache',
//   });

//   const handleCallAPIGraphQL = () => getStoreConfigQuery();

//   const handleCallAPIAxios = () => {
//     let data = JSON.stringify({
//       query: `query getStoreConfig {
//         storeConfig {
//           id
//           base_media_url
//           header_logo_src
//           logo_width
//           logo_height
//           website_id
//           default_display_currency_code
//           default_country_code
//           country_calling_code
//           phone_typical_format
//           phone_input_mask
//           national_flags_image
//           locale
//           code
//           store_name
//           store_group_name
//           copyright
//           store_name
//           root_category_id
//           catalog_default_sort_by
//           product_url_suffix
//           walletreward_wallet_status
//           walletreward_reward_enable
//           walletreward_reward_earn_reward_creating_order_enable_create_order
//           walletreward_reward_earn_reward_creating_order_min_order_qty
//           walletreward_reward_earn_reward_creating_order_min_order_total
//           walletreward_reward_earn_reward_creating_order_reward_point
//           walletreward_reward_earn_reward_creating_order_reward_message
//           walletreward_reward_earn_reward_creating_order_earn_type
//           walletreward_reward_earn_reward_creating_order_max_reward_per_order
//           walletreward_wallet_order_allow_max_credit_per_order
//           out_of_stock_for_saleable_qty_zero
//           pwa_image_banner_checkout_left
//           pwa_image_banner_checkout_right
//           pwa_image_banner_cart_left
//           pwa_image_banner_cart_right
//           pwa_image_banner_checkout_left_link
//           pwa_image_banner_checkout_right_link
//           pwa_image_banner_cart_left_link
//           pwa_image_banner_cart_right_link
//           configurable_thumbnail_source
//           price_decimal_enable
//           price_decimal_precision
//           header_type
//           recaptcha_site_key
//           public_key_checkoutcom
//           tabby_min_limit
//           tabby_max_limit
//           tamara_min_limit
//           tamara_max_limit
//           tamara_display_limit_warning
//           template_option
//           global_text_color
//           global_title_color
//           global_icon_color
//           global_background_header_color
//           global_text_header_color
//           global_background_footer_color
//           global_text_footer_color
//           global_background_page
//           global_button_background_color
//           global_text_inside_button_color
//           global_hover_text_color
//           global_hover_background_color
//           global_background_image_product_color
//           global_primary_background_color
//           global_secondary_background_color
//           global_tertiary_background_color
//           global_quaternary_background_color
//           global_text_inside_primary_background_color
//           global_text_inside_secondary_background_color
//           global_text_inside_tertiary_background_color
//           global_text_inside_quaternary_background_color
//           header_top_taskbar_text_color
//           header_top_taskbar_background_color
//           product_list_text_color
//           product_list_background_color
//           bottom_taskbar_footer_text_color
//           bottom_taskbar_footer_background_color
//           category_name_color_text_color
//           product_detail_info_tab_background_active
//           product_detail_info_tab_text_inside_active
//           product_detail_info_tab_background_inactive
//           product_detail_info_tab_text_inside_inactive
//           product_list_filter_background_color
//           product_list_filter_text_color
//           product_list_label_filter_background_color
//           product_list_text_label_filter_color
//           product_detail_quantity_text_color
//           product_detail_quantity_background_color
//           mega_menu_background_color
//           social_login_google_enable
//           social_login_google_client_id
//           social_login_facebook_enable
//           social_login_facebook_app_id
//           social_login_apple_enable
//           social_login_apple_app_client_id
//           social_login_apple_app_url_redirect
//           snaptec_payment_app_icon_apple_logo
//           snaptec_payment_app_icon_apple_logo_width
//           snaptec_payment_app_icon_apple_logo_height
//           snaptec_payment_app_icon_visa_logo
//           snaptec_payment_app_icon_visa_logo_width
//           snaptec_payment_app_icon_visa_logo_height
//           snaptec_payment_app_icon_aramex_logo
//           snaptec_payment_app_icon_aramex_logo_width
//           snaptec_payment_app_icon_aramex_logo_height
//           snaptec_payment_app_icon_mastercard_logo
//           snaptec_payment_app_icon_mastercard_logo_width
//           snaptec_payment_app_icon_mastercard_logo_height
//           snaptec_payment_app_icon_mada_logo
//           snaptec_payment_app_icon_mada_logo_width
//           snaptec_payment_app_icon_mada_logo_height
//           snaptec_payment_app_icon_cod_logo
//           snaptec_payment_app_icon_cod_logo_width
//           snaptec_payment_app_icon_cod_logo_height
//           snaptec_payment_icon_tamara_logo
//           snaptec_payment_icon_tamara_logo_width
//           snaptec_payment_icon_tamara_logo_height
//           snaptec_payment_icon_tabby_logo
//           snaptec_payment_icon_tabby_logo_width
//           snaptec_payment_icon_tabby_logo_height
//           snaptec_payment_app_icon_stc_logo
//           snaptec_payment_app_icon_stc_logo_width
//           snaptec_payment_app_icon_stc_logo_height
//           snaptec_payment_icon_card_payment_logo
//           snaptec_payment_icon_card_payment_logo_width
//           snaptec_payment_icon_card_payment_logo_height
//           snaptec_global_icon_myaccount_logo
//           snaptec_global_icon_myaccount_logo_width
//           snaptec_global_icon_myaccount_logo_height
//           snaptec_global_icon_mywishlist_logo
//           snaptec_global_icon_mywishlist_logo_width
//           snaptec_global_icon_mywishlist_logo_height
//           snaptec_global_icon_cart_logo
//           snaptec_global_icon_cart_logo_width
//           snaptec_global_icon_cart_logo_height
//           snaptec_global_icon_activeaddtowishlist_logo
//           snaptec_global_icon_activeaddtowishlist_logo_width
//           snaptec_global_icon_activeaddtowishlist_logo_height
//           snaptec_global_icon_inactiveaddtowishlist_logo
//           snaptec_global_icon_inactiveaddtowishlist_logo_width
//           snaptec_global_icon_inactiveaddtowishlist_logo_height
//           snaptec_global_icon_activetoggle_logo
//           snaptec_global_icon_activetoggle_logo_width
//           snaptec_global_icon_activetoggle_logo_height
//           snaptec_global_icon_inactivetoggle_logo
//           snaptec_global_icon_inactivetoggle_logo_width
//           snaptec_global_icon_inactivetoggle_logo_height
//           snaptec_global_icon_edit_logo
//           snaptec_global_icon_edit_logo_width
//           snaptec_global_icon_edit_logo_height
//           snaptec_global_icon_activetickbox_logo
//           snaptec_global_icon_activetickbox_logo_width
//           snaptec_global_icon_activetickbox_logo_height
//           snaptec_global_icon_inactivetickbox_logo
//           snaptec_global_icon_inactivetickbox_logo_width
//           snaptec_global_icon_inactivetickbox_logo_height
//           snaptec_global_icon_share_logo
//           snaptec_global_icon_share_logo_width
//           snaptec_global_icon_share_logo_height
//           snaptec_myaccount_icon_profile_logo
//           snaptec_myaccount_icon_profile_logo_width
//           snaptec_myaccount_icon_profile_logo_height
//           snaptec_myaccount_icon_paymentmethod_logo
//           snaptec_myaccount_icon_paymentmethod_logo_width
//           snaptec_myaccount_icon_paymentmethod_logo_height
//           snaptec_myaccount_icon_addresslist_logo
//           snaptec_myaccount_icon_addresslist_logo_width
//           snaptec_myaccount_icon_addresslist_logo_height
//           snaptec_myaccount_icon_myorder_logo
//           snaptec_myaccount_icon_myorder_logo_width
//           snaptec_myaccount_icon_myorder_logo_height
//           snaptec_myaccount_icon_loyaltyprogram_logo
//           snaptec_myaccount_icon_loyaltyprogram_logo_width
//           snaptec_myaccount_icon_loyaltyprogram_logo_height
//           snaptec_myaccount_icon_mywishlist_logo
//           snaptec_myaccount_icon_mywishlist_logo_width
//           snaptec_myaccount_icon_mywishlist_logo_height
//           snaptec_myaccount_icon_myrefund_logo
//           snaptec_myaccount_icon_myrefund_logo_width
//           snaptec_myaccount_icon_myrefund_logo_height
//           snaptec_myaccount_icon_deleteaccount_logo
//           snaptec_myaccount_icon_deleteaccount_logo_width
//           snaptec_myaccount_icon_deleteaccount_logo_height
//           snaptec_myaccount_icon_disable_account_logo
//           snaptec_myaccount_icon_disable_account_logo_width
//           snaptec_myaccount_icon_disable_account_logo_height
//           snaptec_global_icon_language_en_logo
//           snaptec_global_icon_language_en_logo_width
//           snaptec_global_icon_language_en_logo_height
//           snaptec_global_icon_language_ar_logo
//           snaptec_global_icon_language_ar_logo_width
//           snaptec_global_icon_language_ar_logo_height
//           snaptec_myaccount_icon_logout_logo
//           snaptec_myaccount_icon_logout_logo_width
//           snaptec_myaccount_icon_logout_logo_height
//           snaptec_global_icon_favicon_logo
//           snaptec_global_icon_favicon_logo_width
//           snaptec_global_icon_favicon_logo_height
//           social_login_google_logo
//           social_login_google_logo_width
//           social_login_google_logo_height
//           social_login_facebook_logo
//           social_login_facebook_logo_width
//           social_login_facebook_logo_height
//           social_login_apple_logo
//           social_login_apple_logo_width
//           social_login_apple_logo_height
//           snaptec_cms_app_stayintouchblock_all
//           snaptec_cms_app_stayintouchblock_pages
//           product_detail_upload_wishlist_icon_inactive
//           product_detail_upload_wishlist_icon_inactive_width
//           product_detail_upload_wishlist_icon_inactive_height
//           product_detail_upload_wishlist_icon_active
//           product_detail_upload_wishlist_icon_active_width
//           product_detail_upload_wishlist_icon_active_height
//           mega_menu_subcate_align
//           customer_login_options
//           allow_guests_to_write_product_reviews
//           tabby_payment_enable_pdp_widget
//           tamara_payment_enable_pdp_widget
//           snaptec_payment_icon_telr_telrpayment_logo
//           snaptec_payment_icon_telr_telrpayment_logo_width
//           snaptec_payment_icon_telr_telrpayment_logo_height
//           snaptec_payment_icon_telr_telrpayment_logo_position
//           snaptec_payment_icon_myfatoorah_payment_logo
//           snaptec_payment_icon_myfatoorah_payment_logo_width
//           snaptec_payment_icon_myfatoorah_payment_logo_height
//           snaptec_payment_icon_myfatoorah_payment_logo_position
//           default_payment_method
//           estimate_shipping_time_is_enable
//           snaptec_payment_icon_apple_logo_position
//           snaptec_payment_icon_visa_logo_position
//           snaptec_payment_icon_aramex_logo_position
//           snaptec_payment_icon_mastercard_logo_position
//           snaptec_payment_icon_mada_logo_position
//           snaptec_payment_icon_cod_logo_pisition
//           snaptec_payment_icon_tamara_logo_position
//           snaptec_payment_icon_tabby_logo_position
//           snaptec_payment_icon_stc_logo_postion
//           snaptec_payment_icon_card_payment_logo_position
//           button_border_radius
//           store_name_label
//           access_token_lifetime_customer
//           limit_for_send_otp
//           seo_config_meta_description
//           seo_config_meta_keywords
//           seo_config_meta_title
//           config_cache_id_fe
//           snaptec_topbar_enable
//           snaptec_topbar_content
//           payment_hyperpay_mode
//           payment_hyperpay_test_scripturl
//           payment_hyperpay_live_scripturl
//           payment_hyperpay_applepay_merchant_identifier
//           __typename
//         }
//       }`,
//       variables: {},
//     });

//     let config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'https://nova-be.9ten.online/graphql',
//       headers: {
//         Host: 'nova-be.9ten.online',
//         Accept: '*/*',
//         createemptycart: 'create_cart_id',
//         'User-Agent': 'DEMOGRAPHQL/1 CFNetwork/1474 Darwin/23.0.0',
//         Connection: 'keep-alive',
//         'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
//         store: 'nova_ksa_ar',
//         'Content-Type': 'application/json',
//         Cookie:
//           'PHPSESSID=kh4jle6thehfi7uct417mtn37q; private_content_version=9f72254dc453fa1e8cd9a7877f2765a4',
//       },
//       data: data,
//     };

//     axios
//       .request(config)
//       .then(response => {
//         console.log(JSON.stringify(response.data));
//         setDataAxios(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//         setErrorAxios(error);
//       });
//   };
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       {/* <ScrollView style={{}}> */}
//         <TouchableOpacity
//           onPress={() => handleCallAPIGraphQL()}
//           style={{
//             backgroundColor: 'blue',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: 16,
//           }}>
//           <Text>GRAPHQL-getStoreConfig</Text>
//         </TouchableOpacity>
//         {/* <ScrollView style={{maxHeight: 300}}>
//           <DNetWorkLog /> */}
//           {/* {!!data?.storeConfig && (
//             <Text>{JSON.stringify(data?.storeConfig, null, 2)}</Text>
//           )}
//           {!!error && <Text>{JSON.stringify(error?.message, null, 2)}</Text>} */}
//         {/* </ScrollView> */}
//         <TouchableOpacity
//           onPress={() => handleCallAPIAxios()}
//           style={{
//             backgroundColor: 'blue',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: 16,
//             marginTop: 16,
//           }}>
//           <Text>AXIOS-getStoreConfig</Text>
//         </TouchableOpacity>
//         {/* <ScrollView style={{maxHeight: 300}}>
//           {!!dataAxios && (
//             <Text>{JSON.stringify(dataAxios?.data?.storeConfig, null, 2)}</Text>
//           )}
//           {!!errorAxios && <Text>{JSON.stringify(errorAxios, null, 2)}</Text>}
//         </ScrollView> */}
//         <ScrollView>
//           <DNetWorkLog />
//         </ScrollView>
//       {/* </ScrollView> */}
//     </SafeAreaView>
//   );
// };

// export default AppRouter;

import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import axios from 'axios';

import DeviceInfo from 'react-native-device-info';
import {useLazyQuery} from '@apollo/client';
import storeConfigQueries from './graphql/queries/storeconfig.gql';
import NetworkLog from './networklogger';

export const AppRouter = () => {
  const {getStoreConfig} = storeConfigQueries || {};
  const [getStoreConfigQuery] = useLazyQuery(getStoreConfig, {
    fetchPolicy: 'no-cache',
  });

  const [deviceInfo, setDeviceInfo] = useState(null);
  const [isAxiosWork, setAxiosWork] = useState(false);
  const [isGraphQlWork, setGraphQlWork] = useState(false);
  const [isRestApiWork, setRestApiWork] = useState(false);
  const [isShowNetworkLogger, setShowNetworkLogger] = useState(false);

  const getDeviceInfo = async () => {
    let deviceData = {};
    deviceData.DeviceName = await DeviceInfo?.getDeviceName();

    await DeviceInfo.getCarrier().then(carrier => {
      // "SOFTBANK"
      deviceData.Carrier = carrier;
    });

    await DeviceInfo.getHost().then(host => {
      // "wprd10.hot.corp.google.com"
      deviceData.Host = host;
    });

    await DeviceInfo.getIpAddress().then(ip => {
      // "92.168.32.44"
      deviceData.Ip = ip;
    });

    setDeviceInfo(deviceData);
  };

  const getConfigAxios = async () => {
    const data = JSON.stringify({
      query: `query getStoreConfig {
        storeConfig {
          id
          base_media_url
          base_url
          header_logo_src
          logo_width
          logo_height
          website_id
          default_display_currency_code
          default_country_code
          country_calling_code
          phone_typical_format
          phone_input_mask
          national_flags_image
          locale
          code
          store_name
          store_group_name
          copyright
          store_name
          root_category_id
          catalog_default_sort_by
          product_url_suffix
          walletreward_wallet_status
          walletreward_reward_enable
          walletreward_reward_earn_reward_creating_order_enable_create_order
          walletreward_reward_earn_reward_creating_order_min_order_qty
          walletreward_reward_earn_reward_creating_order_min_order_total
          walletreward_reward_earn_reward_creating_order_reward_point
          walletreward_reward_earn_reward_creating_order_reward_message
          walletreward_reward_earn_reward_creating_order_earn_type
          walletreward_reward_earn_reward_creating_order_max_reward_per_order
          walletreward_wallet_order_allow_max_credit_per_order
          out_of_stock_for_saleable_qty_zero
          pwa_image_banner_checkout_left
          pwa_image_banner_checkout_right
          pwa_image_banner_cart_left
          pwa_image_banner_cart_right
          pwa_image_banner_checkout_left_link
          pwa_image_banner_checkout_right_link
          pwa_image_banner_cart_left_link
          pwa_image_banner_cart_right_link
          configurable_thumbnail_source
          price_decimal_enable
          price_decimal_precision
          header_type
          recaptcha_site_key
          public_key_checkoutcom
          tabby_min_limit
          tabby_max_limit
          tamara_min_limit
          tamara_max_limit
          tamara_display_limit_warning
          template_option
          global_text_color
          global_title_color
          global_icon_color
          global_background_header_color
          global_text_header_color
          global_background_footer_color
          global_text_footer_color
          global_background_page
          global_button_background_color
          global_text_inside_button_color
          global_hover_text_color
          global_hover_background_color
          global_background_image_product_color
          global_primary_background_color
          global_secondary_background_color
          global_tertiary_background_color
          global_quaternary_background_color
          global_text_inside_primary_background_color
          global_text_inside_secondary_background_color
          global_text_inside_tertiary_background_color
          global_text_inside_quaternary_background_color
          header_top_taskbar_text_color
          header_top_taskbar_background_color
          product_list_text_color
          product_list_background_color
          bottom_taskbar_footer_text_color
          bottom_taskbar_footer_background_color
          category_name_color_text_color
          product_detail_info_tab_background_active
          product_detail_info_tab_text_inside_active
          product_detail_info_tab_background_inactive
          product_detail_info_tab_text_inside_inactive
          product_list_filter_background_color
          product_list_filter_text_color
          product_list_label_filter_background_color
          product_list_text_label_filter_color
          product_detail_quantity_text_color
          product_detail_quantity_background_color
          mega_menu_background_color
          social_login_google_enable
          social_login_google_client_id
          social_login_facebook_enable
          social_login_facebook_app_id
          social_login_apple_enable
          social_login_apple_app_client_id
          social_login_apple_app_url_redirect
          snaptec_payment_app_icon_apple_logo
          snaptec_payment_app_icon_apple_logo_width
          snaptec_payment_app_icon_apple_logo_height
          snaptec_payment_app_icon_visa_logo
          snaptec_payment_app_icon_visa_logo_width
          snaptec_payment_app_icon_visa_logo_height
          snaptec_payment_app_icon_aramex_logo
          snaptec_payment_app_icon_aramex_logo_width
          snaptec_payment_app_icon_aramex_logo_height
          snaptec_payment_app_icon_mastercard_logo
          snaptec_payment_app_icon_mastercard_logo_width
          snaptec_payment_app_icon_mastercard_logo_height
          snaptec_payment_app_icon_mada_logo
          snaptec_payment_app_icon_mada_logo_width
          snaptec_payment_app_icon_mada_logo_height
          snaptec_payment_app_icon_cod_logo
          snaptec_payment_app_icon_cod_logo_width
          snaptec_payment_app_icon_cod_logo_height
          snaptec_payment_icon_tamara_logo
          snaptec_payment_icon_tamara_logo_width
          snaptec_payment_icon_tamara_logo_height
          snaptec_payment_icon_tabby_logo
          snaptec_payment_icon_tabby_logo_width
          snaptec_payment_icon_tabby_logo_height
          snaptec_payment_app_icon_stc_logo
          snaptec_payment_app_icon_stc_logo_width
          snaptec_payment_app_icon_stc_logo_height
          snaptec_payment_icon_card_payment_logo
          snaptec_payment_icon_card_payment_logo_width
          snaptec_payment_icon_card_payment_logo_height
          snaptec_global_icon_myaccount_logo
          snaptec_global_icon_myaccount_logo_width
          snaptec_global_icon_myaccount_logo_height
          snaptec_global_icon_mywishlist_logo
          snaptec_global_icon_mywishlist_logo_width
          snaptec_global_icon_mywishlist_logo_height
          snaptec_global_icon_cart_logo
          snaptec_global_icon_cart_logo_width
          snaptec_global_icon_cart_logo_height
          snaptec_global_icon_activeaddtowishlist_logo
          snaptec_global_icon_activeaddtowishlist_logo_width
          snaptec_global_icon_activeaddtowishlist_logo_height
          snaptec_global_icon_inactiveaddtowishlist_logo
          snaptec_global_icon_inactiveaddtowishlist_logo_width
          snaptec_global_icon_inactiveaddtowishlist_logo_height
          snaptec_global_icon_activetoggle_logo
          snaptec_global_icon_activetoggle_logo_width
          snaptec_global_icon_activetoggle_logo_height
          snaptec_global_icon_inactivetoggle_logo
          snaptec_global_icon_inactivetoggle_logo_width
          snaptec_global_icon_inactivetoggle_logo_height
          snaptec_global_icon_edit_logo
          snaptec_global_icon_edit_logo_width
          snaptec_global_icon_edit_logo_height
          snaptec_global_icon_activetickbox_logo
          snaptec_global_icon_activetickbox_logo_width
          snaptec_global_icon_activetickbox_logo_height
          snaptec_global_icon_inactivetickbox_logo
          snaptec_global_icon_inactivetickbox_logo_width
          snaptec_global_icon_inactivetickbox_logo_height
          snaptec_global_icon_share_logo
          snaptec_global_icon_share_logo_width
          snaptec_global_icon_share_logo_height
          snaptec_myaccount_icon_profile_logo
          snaptec_myaccount_icon_profile_logo_width
          snaptec_myaccount_icon_profile_logo_height
          snaptec_myaccount_icon_paymentmethod_logo
          snaptec_myaccount_icon_paymentmethod_logo_width
          snaptec_myaccount_icon_paymentmethod_logo_height
          snaptec_myaccount_icon_addresslist_logo
          snaptec_myaccount_icon_addresslist_logo_width
          snaptec_myaccount_icon_addresslist_logo_height
          snaptec_myaccount_icon_myorder_logo
          snaptec_myaccount_icon_myorder_logo_width
          snaptec_myaccount_icon_myorder_logo_height
          snaptec_myaccount_icon_loyaltyprogram_logo
          snaptec_myaccount_icon_loyaltyprogram_logo_width
          snaptec_myaccount_icon_loyaltyprogram_logo_height
          snaptec_myaccount_icon_mywishlist_logo
          snaptec_myaccount_icon_mywishlist_logo_width
          snaptec_myaccount_icon_mywishlist_logo_height
          snaptec_myaccount_icon_myrefund_logo
          snaptec_myaccount_icon_myrefund_logo_width
          snaptec_myaccount_icon_myrefund_logo_height
          snaptec_myaccount_icon_deleteaccount_logo
          snaptec_myaccount_icon_deleteaccount_logo_width
          snaptec_myaccount_icon_deleteaccount_logo_height
          snaptec_myaccount_icon_disable_account_logo
          snaptec_myaccount_icon_disable_account_logo_width
          snaptec_myaccount_icon_disable_account_logo_height
          snaptec_global_icon_language_en_logo
          snaptec_global_icon_language_en_logo_width
          snaptec_global_icon_language_en_logo_height
          snaptec_global_icon_language_ar_logo
          snaptec_global_icon_language_ar_logo_width
          snaptec_global_icon_language_ar_logo_height
          snaptec_myaccount_icon_logout_logo
          snaptec_myaccount_icon_logout_logo_width
          snaptec_myaccount_icon_logout_logo_height
          snaptec_global_icon_favicon_logo
          snaptec_global_icon_favicon_logo_width
          snaptec_global_icon_favicon_logo_height
          social_login_google_logo
          social_login_google_logo_width
          social_login_google_logo_height
          social_login_facebook_logo
          social_login_facebook_logo_width
          social_login_facebook_logo_height
          social_login_apple_logo
          social_login_apple_logo_width
          social_login_apple_logo_height
          snaptec_cms_app_stayintouchblock_all
          snaptec_cms_app_stayintouchblock_pages
          product_detail_upload_wishlist_icon_inactive
          product_detail_upload_wishlist_icon_inactive_width
          product_detail_upload_wishlist_icon_inactive_height
          product_detail_upload_wishlist_icon_active
          product_detail_upload_wishlist_icon_active_width
          product_detail_upload_wishlist_icon_active_height
          mega_menu_subcate_align
          customer_login_options
          allow_guests_to_write_product_reviews
          tabby_payment_enable_pdp_widget
          tamara_payment_enable_pdp_widget
          snaptec_payment_icon_telr_telrpayment_logo
          snaptec_payment_icon_telr_telrpayment_logo_width
          snaptec_payment_icon_telr_telrpayment_logo_height
          snaptec_payment_icon_telr_telrpayment_logo_position
          snaptec_payment_icon_myfatoorah_payment_logo
          snaptec_payment_icon_myfatoorah_payment_logo_width
          snaptec_payment_icon_myfatoorah_payment_logo_height
          snaptec_payment_icon_myfatoorah_payment_logo_position
          default_payment_method
          estimate_shipping_time_is_enable
          snaptec_payment_icon_apple_logo_position
          snaptec_payment_icon_visa_logo_position
          snaptec_payment_icon_aramex_logo_position
          snaptec_payment_icon_mastercard_logo_position
          snaptec_payment_icon_mada_logo_position
          snaptec_payment_icon_cod_logo_pisition
          snaptec_payment_icon_tamara_logo_position
          snaptec_payment_icon_tabby_logo_position
          snaptec_payment_icon_stc_logo_postion
          snaptec_payment_icon_card_payment_logo_position
          button_border_radius
          store_name_label
          access_token_lifetime_customer
          limit_for_send_otp
          seo_config_meta_description
          seo_config_meta_keywords
          seo_config_meta_title
          config_cache_id_fe
          snaptec_topbar_enable
          snaptec_topbar_content
          payment_hyperpay_mode
          payment_hyperpay_test_scripturl
          payment_hyperpay_live_scripturl
          payment_hyperpay_applepay_merchant_identifier
          __typename
        }
      }`,
      variables: {},
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://staging-nova-be.9ten.online/graphql',
      headers: {
        Host: 'staging-nova-be.9ten.online',
        Accept: '*/*',
        Authorization: '',
        'Accept-Language': 'vi-VN,vi;q=0.9',
        'source-code': '',
        'content-currency': 'SAR',
        store: 'nova_ksa_en',
        'Content-Type': 'application/json',
      },
      data: data,
    };

    await axios
      .request(config)
      .then(response => {
        //console.log(JSON.stringify(response.data));
        setAxiosWork(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getConfigGraphQl = async () => {
    const response = await getStoreConfigQuery();
    const storeConfig = response?.data?.storeConfig;
    if (storeConfig) {
      setGraphQlWork(true);
    }
  };

  const getRestFullApi = async () => {
    const config = {
      method: 'get',
      url: 'https://prod-ival.snaptec.co/simiconnector/rest/v2/storeviews/32',
      headers: {
        Cookie: 'PHPSESSID=4jvomd91qmmvvndjbhun1aibgl; store=oska_ar',
      },
    };

    await axios
      .request(config)
      .then(response => {
        setRestApiWork(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onOpenNetworkLogger = () => {
    setShowNetworkLogger(true);
  };

  const onCloseNetworkLogger = () => {
    setShowNetworkLogger(false);
  };

  useEffect(() => {
    getDeviceInfo();
    getConfigAxios();
    getConfigGraphQl();
    getRestFullApi();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {deviceInfo && (
        <>
          <Text>{deviceInfo?.DeviceName}</Text>
          <Text>Carrier: {deviceInfo?.Carrier}</Text>
          <Text>Host: {deviceInfo?.Host}</Text>
          <Text>Ip: {deviceInfo?.Ip}</Text>
        </>
      )}
      <Text>Axios Request: {isAxiosWork ? 'Success' : 'False'}</Text>
      <Text>GraphQl Request: {isGraphQlWork ? 'Success' : 'False'}</Text>
      <Text>Restfull API Request: {isRestApiWork ? 'Success' : 'False'}</Text>

      <TouchableOpacity
        onPress={onOpenNetworkLogger}
        style={{
          backgroundColor: '#418FDE',
          paddingVertical: 10,
          paddingHorizontal: 18,
          borderRadius: 10,
          marginVertical: 20,
        }}>
        <Text>Open Network Logger</Text>
      </TouchableOpacity>

      <NetworkLog isShow={isShowNetworkLogger} onClose={onCloseNetworkLogger} />
    </View>
  );
};

export default AppRouter;
