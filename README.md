# Tasks - Stage 2

## Backend

1. modify `TableConfig` interface to be generic
   1. TableConfig<TSchema> has to correspond with the keys from original interface (User) so the columns and rows can have only the keys from the original interface
   2. The Cell `data` type has to be of the same type as the original interface value
   3. The Column `key` can only be from keys from the original interface
2. `tableConfig.colums` is prepared, you need to adjust `tableConfig.rows`

## Frontend

1. Having data from backend, display it in table

| Id  | Name  | Email          | Street      | Age | CreatedAt  |
|-----|-------|----------------|-------------|-----|------------|
| 1   | Dawid | dawid@mail.com | someStreet  | 12  | 15.04.2012 |
| 2   | Ivan  | ivan@mail.com  | otherStreet | 13  | 20.08.2022 |
