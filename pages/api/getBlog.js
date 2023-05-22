import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { getSession } from '@auth0/nextjs-auth0';
import clientPromise from '@/lib/mongodb';

export default withApiAuthRequired(async function getSinglePost(req, res) {
  const userSession = await getSession(req, res);
  console.log(`User: ${user.sub}`);
  const client = await clientPromise;
  const db = client.db('AiBlog');

  const user = await db.collection('users').findOne({
    auth0Id: userSession.user.sub,
  });
  const post = await db.collection('posts').findOne({
    _id: req.query.postId,
  });
});
