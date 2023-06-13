/* eslint-disable prettier/prettier */
export const isValidCPF = (cpf: string) => {
  const cpfRegex = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/;
  return cpfRegex.test(cpf);
};

export const formatCPF = (cpf: string) => {
  const cpfRegex = /^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/;

  if (typeof cpf !== "string") throw new Error("Invalid parameter type. The CPF (Social Security Number) should be provided as a string.");
  if (!cpfRegex.test(cpf)) throw new Error("The CPF code must contain 11 numeric digits.");

  return cpf.replace(cpfRegex, "$1.$2.$3-$4");
};
