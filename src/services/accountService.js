import httpRequest from '~/utils/httpRequest';

const path = '/user/@';
const suggestedPath = '/users/suggested';

export const getSuggestedAccount = async (perPage, page = 1) => {
   const dataResponse = await httpRequest.get(suggestedPath, {
      params: {
         page,
         per_page: perPage,
      },
   });

   if (dataResponse.data === undefined) return [];
   return dataResponse.data;
};

export const getUserAccount = async (username) => {
   const dataResponse = await httpRequest.get(path + username);
   if (dataResponse.status === 400) return;
   return dataResponse.data;
};
