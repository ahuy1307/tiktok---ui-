import httpRequest from '~/utils/httpRequest';

const path = '/videos';

export const getSuggestedVideo = async (page, type = 'for-you') => {
   const respondData = await httpRequest.get(path, {
      params: {
         type,
         page,
      },
   });

   if (respondData.status === 0) return [];
   return respondData.data;
};
