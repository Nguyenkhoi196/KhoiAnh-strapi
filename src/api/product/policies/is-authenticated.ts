import untils from "@strapi/utils";
const { PolicyError } = untils.errors;
export default (policyContext, config, { strapi }) => {
  const { user } = policyContext.state;

  if (user) {
    return true;
  }
  return new PolicyError("Tài khoản chưa xác thực");
};
