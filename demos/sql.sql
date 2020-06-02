declare @dttm varchar(55)
select  @dttm=convert(varchar,getdate(),113)
raiserror('Beginning InstPubs.SQL at %s ....',1,1,@dttm) with nowait

GO

if exists (select * from sysdatabases where name='pubs')
begin
  raiserror('Dropping existing pubs database ....',0,1)
  DROP database pubs
end
GO