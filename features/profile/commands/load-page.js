import default from '../repository';
const { getUser } = default;

import { FETCH_INFO_ERROR_MESSAGE } from '../constants';

async function loadPage(req, res) {
  let userInfo;
  const { user } = req;
  try {
    userInfo = await getUser(user && user.id);
  } catch (getUserError) {
    req.session.messages = { databaseError: FETCH_INFO_ERROR_MESSAGE };
  }

  req.session.userInfo = { ...userInfo };
  res.render('pages/profile');
}

export default loadPage;
