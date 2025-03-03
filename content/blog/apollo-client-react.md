---
title: Mastering Apollo Client with React - A Practical Guide
date: 2025-02-28
readTime: 7 min read
---

Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. It's particularly powerful when used with React applications, allowing for efficient data fetching, caching, and UI updates.

In this guide, we'll explore two critical aspects of Apollo Client: fetch policies and mutation strategies.

## Understanding Apollo Client Fetch Policies

Fetch policies determine how Apollo Client interacts with its cache when executing queries. Choosing the right fetch policy can significantly impact your application's performance and user experience.

### Available Fetch Policies

Here's a breakdown of each fetch policy and when to use them:

#### 1. Cache First (Default)

```tsx
const { data, loading } = useQuery(GET_DATA, {
  fetchPolicy: 'cache-first' 
});
```

This default policy checks the cache first. If the data isn't in the cache, only then does it make a network request. Perfect for data that doesn't change often.

#### 2. Network Only

```tsx
const { data, loading } = useQuery(GET_DATA, {
  fetchPolicy: 'network-only' 
});
```

Always makes a network request, ignoring the cache initially. Use this when you need the most up-to-date data.

#### 3. Cache and Network

```tsx
const { data, loading } = useQuery(GET_DATA, {
  fetchPolicy: 'cache-and-network' 
});
```

Provides the best of both worlds - shows cached data immediately, then updates with fresh data from the network. Great for improving perceived performance while ensuring data freshness.

#### 4. Cache Only

```tsx
const { data, loading } = useQuery(GET_DATA, {
  fetchPolicy: 'cache-only' 
});
```

Only reads from the cache and never makes network requests. Useful for purely local data or when you're offline.

#### 5. No Cache

```tsx
const { data, loading } = useQuery(GET_DATA, {
  fetchPolicy: 'no-cache' 
});
```

Makes network requests without saving the results to the cache. Use for sensitive data you don't want to persist.

#### 6. Standby

```tsx
const { data, loading } = useQuery(GET_DATA, {
  fetchPolicy: 'standby' 
});
```

The query is inactive and only updates through direct cache writes. Useful for queries you manually control.

## Effective Mutation Strategies

After executing mutations, you'll often need to update your UI. Apollo Client provides several strategies to handle this:

### 1. Refetching Queries

The simplest approach is to refetch related queries after a mutation completes:

```tsx
const [addTodo, { loading, error }] = useMutation(ADD_TODO, {
  refetchQueries: [
    GET_TODOS, // DocumentNode object parsed with gql
    'GetUserTodos' // Or query name as string
  ],
});
```

This works well for simple applications without pagination. However, there's a known issue where `onCompleted` callbacks may not fire after refetching.

### 2. Using nextFetchPolicy to Ensure onCompleted Works

To ensure `onCompleted` fires after refetching:

```tsx
const { loading, refetch } = useQuery(GET_TODOS, {
  nextFetchPolicy: 'cache-and-network', // This is crucial
  variables: { input: { count: 10 } },
  onCompleted: (data) => {
    // This will now run after both initial query and refetch
    console.log('Todos loaded:', data.todos);
  },
});
```

### 3. Alternative: Using useEffect

An alternative approach using `useEffect`:

```tsx
const { loading, refetch, data } = useQuery(GET_TODOS, {
  variables: { input: { count: 10 } },
});

useEffect(() => {
  if (data && !loading) {
    // Handle data updates from both initial query and refetch
    console.log('Todos updated:', data.todos);
  }
}, [data, loading]);
```

### 4. Updating the Cache Directly

For more complex scenarios, directly updating the cache offers the most control:

```tsx
const [addTodo, { loading }] = useMutation(ADD_TODO, {
  update(cache, { data: { addTodo } }) {
    const { todos } = cache.readQuery({ query: GET_TODOS });
    
    cache.writeQuery({
      query: GET_TODOS,
      data: { todos: [...todos, addTodo] },
    });
  }
});
```

This approach is ideal for paginated lists or complex data structures.

## Conclusion

Mastering Apollo Client's fetch policies and mutation strategies allows you to build React applications with efficient data management. By choosing the right approach for your specific use case, you can optimize for both performance and user experience.

Remember that the best solution often depends on your specific requirements - consider factors like data volatility, network conditions, and UI complexity when implementing these patterns.
