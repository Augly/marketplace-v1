import { NextRouter } from 'next/router'

function toggleOnItem(router: NextRouter, item: string, value: string) {
  router.push(
    {
      pathname: router.pathname,
      query: { ...router.query, [`${item}`]: value },
    },
    undefined,
    {
      shallow: true,
    }
  )
}

function toggleOffItem(router: NextRouter, item: string) {
  let query = router.query

  delete query[`${item}`]

  router.push(
    {
      pathname: router.pathname,
      query,
    },
    undefined,
    {
      shallow: true,
    }
  )
}

function toggleOnAttributeKey(router: NextRouter, item: string, value: string) {
  let query = router.query

  // Delete all attribute filters
  Object.keys(query).find((key) => {
    if (
      key.startsWith('attributes[') &&
      key.endsWith(']') &&
      query[key] !== ''
    ) {
      delete query[key]
    }
  })

  router.push(
    {
      pathname: router.pathname,
      query: { ...router.query, [`${item}`]: value },
    },
    undefined,
    {
      shallow: true,
    }
  )
}

function updateItem(router: NextRouter, item: string, value: string) {
  router.push(
    {
      pathname: router.pathname,
      query: { ...router.query, [`${item}`]: value },
    },
    undefined,
    {
      shallow: true,
    }
  )
}

export { toggleOffItem, toggleOnItem, updateItem, toggleOnAttributeKey }