'use strict';

angular.module('cath')
.constant(
  'AppConfig', {
    DB_URL: '/',
  }
)
.config(function (facebookProvider, toastrConfig) {
  facebookProvider.setAppID('687329278084857');
  angular.extend(toastrConfig, {
    timeOut: 10000,
  });
})
.config(function ($translateProvider) {
  $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider.translations('en', {
    'ผู้ร่วมฟ้องขณะนี้': 'Current class members',
    'บอกต่อ': 'Share',
    'เปลี่ยนภาษา': 'Change Language',
    'ร่วมฟ้องกลุ่มคดีนี้': 'Join this Class Action Lawsuit',
    'ชื่อ': 'First Name',
    'นามสกุล': 'Last Name',
    'เบอร์โทร': 'Telephone Number',
    'อีเมล์': 'Email',
    'หมายเลขสมาชิกทรูวิชั่นส์': 'TrueVisions ID Number',
    'ประเภทสมาชิก': 'Type of Membership',
    'โปรดเลือก': 'Please select',
    'ท่านต้องการเรียกร้องอะไร': 'What is the compensation that you want from this lawsuit',
    'ลดค่าสมาชิกรายเดือนตลอดอายุสัญญา': 'Fee reduction around 200-500 bath per month ( Do not want to terminate contract )',
    'เลิกสัญญา และให้ทรูจ่ายเงินชดเชย 1 เดือน': 'Compensation equal one month fee ( Want to terminate contract )',
    'ร่วมฟ้อง': 'Submit Form',
    'คุณได้ทำการส่งข้อมูลให้เราสำเร็จแล้ว': 'Thank you, we have received your form.',
    'ร่วมฟ้องกลุ่มสำเร็จ': 'Successfully submitted',
    'ร่วมฟ้องผิดพลาด': 'Fail to submit',
    'โปรดติดต่อเจ้าหน้าที่: ': 'Please contact our staff: ',
  });
  $translateProvider.preferredLanguage('th');
});
