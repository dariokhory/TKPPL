// helper: query
const { queryAction } = require('../helpers/helper_query')

module.exports = {
  createUser: (payload) => {
    return queryAction(`INSERT INTO public.user
    (username, email, password, phone, role) VALUES 
    ('${((payload.email).split('@'))[0]}', '${payload.email}', '${payload.password}', ${payload.phone}, '${payload.role}') RETURNING id `,
    )
  },
  createUserDetail: (payload) => {
    return queryAction(`INSERT INTO public.user_detail
    (user_id) VALUES (${payload.user_id})`)
  },
  getAllAdmin: () => {
    return queryAction(`SELECT * FROM public.user WHERE role = 'admin'`)
  },
  getAllCustomer: () => {
    return queryAction(`SELECT * FROM public.user WHERE role = 'customer'`)
  },
  getUserByEmail: (email) => {
    return queryAction(`SELECT * FROM public.user WHERE email = '${email}'`)
  },
  getUserDetailById: (id) => {
    return queryAction(`SELECT a.*, b.* FROM public.user_detail as a
      INNER JOIN public.user as b ON a.user_id = b.id WHERE a.user_id = ${id}`)
  },
  modifyUser: (data, id) => {
    const { username, email, phone } = data
    return queryAction(`UPDATE public.user SET
    username = '${username}',
    email = '${email}',
    phone = '${phone}'
    where id = ${id}`
    )
  },
  modifyUserDetail: (detail, id) => {
    const { first_name, last_name, birth_date, gender, address, image, updated_at } = detail
    return queryAction(`UPDATE "user_detail"
      SET (first_name, last_name, birth_date, gender, address, image) =
      ($1, $2, $3, $4, $5, $6) WHERE user_id = $7`,
      [first_name, last_name, birth_date, gender, address, image, id]
    )
  },
  removeUser: (id) => {
    return queryAction(`DELETE FROM "user" WHERE id = $1`, [id])
  }
}
