import { PhoneNumberUtil } from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();

export function getParsedPhone(phone: string) {
  const number = phoneUtil.parseAndKeepRawInput(phone);
  const countryCode = number?.getCountryCode();
  const countryCodeNumber = phoneUtil?.getRegionCodeForNumber(number);

  const formattedPhone = phone.replace(`+${countryCode}`, '');

  return { countryCode, countryCodeNumber, formattedPhone };
}
